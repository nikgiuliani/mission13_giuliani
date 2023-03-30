using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace mission13_giuliani.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieDataController : ControllerBase
{
    private readonly ILogger<MovieDataController> _logger;

    public MovieDataController(ILogger<MovieDataController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetMovieData")]
    public RootObject Get()
    {   
        using (StreamReader r = new StreamReader("assets/json/moviedata.json"))
        {
            string json = r.ReadToEnd();
            
            var items = JsonConvert.DeserializeObject<RootObject>(json);
            return items;
        }
        // var obj = JsonConvert.DeserializeObject<MovieData>(a);
    }
}

