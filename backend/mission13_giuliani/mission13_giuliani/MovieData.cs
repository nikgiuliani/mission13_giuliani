namespace mission13_giuliani;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

public class RootObject
{
    [JsonProperty("MovieData")]
    public List<MovieData>? MovieData { get; set; }
}
public class MovieData
{
    [JsonProperty("Category")]
    public string? Category { get; set; }
    [JsonProperty("Title")]
    public string? Title { get; set; }
    [JsonProperty("Year")]
    public double Year { get; set; }
    [JsonProperty("Director")]
    public string? Director { get; set; }
    [JsonProperty("Rating")]
    public string? rating { get; set; }
}

