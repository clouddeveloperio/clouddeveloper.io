#r "Microsoft.WindowsAzure.Storage" 

using System.Net;
using System.Threading;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Microsoft.WindowsAzure.Storage.Table.Queryable;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, CloudTable table, TraceWriter log)
{
    var results = await table
                            .CreateQuery<VisitorCount>()
                            .AsTableQuery()
                            .ExecuteAsync(CancellationToken.None);

    var counter = results.FirstOrDefault();

    if(counter == null){
        log.Error("No records found.");
        return req.CreateResponse(HttpStatusCode.BadRequest, "Unable to retrieve visitor count.");
    }
    else{
        return req.CreateResponse(HttpStatusCode.OK, new { Count = counter.Value }, "application/json");
    }
    
}

public async static Task<IEnumerable<TElement>> ExecuteAsync<TElement>(this TableQuery<TElement> tableQuery, CancellationToken ct)
{
    var nextQuery = tableQuery;
    var continuationToken = default(TableContinuationToken);
    var results = new List<TElement>();

    do
    {
        //Execute the next query segment async.
        var queryResult = await nextQuery.ExecuteSegmentedAsync(continuationToken, ct);

        //Set exact results list capacity with result count.
        results.Capacity += queryResult.Results.Count;

        //Add segment results to results list.
        results.AddRange(queryResult.Results);

        continuationToken = queryResult.ContinuationToken;

        //Continuation token is not null, more records to load.
        if (continuationToken != null && tableQuery.TakeCount.HasValue)
        {
            //Query has a take count, calculate the remaining number of items to load.
            var itemsToLoad = tableQuery.TakeCount.Value - results.Count;

            //If more items to load, update query take count, or else set next query to null.
            nextQuery = itemsToLoad > 0
                ? tableQuery.Take<TElement>(itemsToLoad).AsTableQuery()
                : null;
        }

    } while (continuationToken != null && nextQuery != null && !ct.IsCancellationRequested);

    return results;
}

public class VisitorCount : TableEntity
{
    public long Value { get;set; }
}