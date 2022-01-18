using Xunit;
using System.Collections.Generic;

public class PlanetExpress
{
  public int TotalTime(List<(int, int, string)> input)
  {
    var StatsDict = new Dictionary<int, (int, List<int>)>();
    foreach ((int Id, int Stamp, string EventType) in input)
    {
      if (!StatsDict.ContainsKey(Id))
      {
        StatsDict.Add(Id, (0, new List<int>()));
      }
      if (EventType == "pickup")
      {
        StatsDict[Id] = (Stamp, StatsDict[Id].Item2);
      }
      else
      {
        StatsDict[Id].Item2.Add(Stamp);
      }
    }
    var total = 0;
    foreach ((var PickupTime, var OtherTimes) in StatsDict.Values)
    {
      foreach (var time in OtherTimes)
      {
        total += time - PickupTime;
      }
    }
    return total;
  }

  [Fact]
  public void Test_case_one_()
  {
    var input = new List<(int, int, string)>();
    Assert.Equal(0, TotalTime(input));
  }


  [Fact]
  public void Test_case_two_()
  {
    var input = new List<(int, int, string)>
  {
    (1, 1642441462, "pickup"),
    (1, 1642441463, "dropoff")
  };
    Assert.Equal(1, TotalTime(input));
  }

  [Fact]
  public void Test_case_three_()
  {
    var input = new List<(int, int, string)>
  {
    (1, 1642441462, "pickup"),
    (1, 1642441463, "eaten"),
    (1, 1642441464, "dropoff")
  };
    Assert.Equal(3, TotalTime(input));
  }

  [Fact]
  public void Test_case_four_()
  {
    var input = new List<(int, int, string)>
  {
    (1, 1570320047, "pickup"),
    (1, 1570320725, "dropoff"),
    (2, 1570321092, "pickup"),
    (2, 1570323012, "dropoff"),
    (3, 1570321212, "pickup"),
    (3, 1570322352, "dropoff")
  };
    Assert.Equal(3738, TotalTime(input));
  }


  [Fact]
  public void Test_case_five_()
  {
    var input = new List<(int, int, string)>
  {
    (1, 1570320047, "pickup"),
    (1, 1570320725, "dropoff"),
    (2, 1570321092, "pickup"),
    (3, 1570321212, "pickup"),
    (3, 1570322352, "dropoff"),
    (2, 1570323012, "dropoff"),
    (2, 1570322092, "eaten")
  };
    Assert.Equal(4738, TotalTime(input));
  }

  [Fact]
  public void Test_case_six_()
  {
    var input = new List<(int, int, string)>
  {
    (1, 1570320047, "pickup"),
    (1, 1570320725, "dropoff"),
    (2, 1570321092, "pickup"),
    (3, 1570321212, "pickup"),
    (3, 1570321213, "eaten"),
    (3, 1570322352, "dropoff"),
    (2, 1570323012, "dropoff"),
    (2, 1570322092, "eaten")
  };
    Assert.Equal(4739, TotalTime(input));
  }

  [Fact]
  public void Test_case_seven_()
  {
    var input = new List<(int, int, string)>
  {
    (1, 1570320047, "pickup"),
    (1, 1570320049, "eaten"),
    (1, 1570320048, "eaten"),
    (1, 1570320055, "eaten"),
    (1, 1570320050, "eaten"),
    (1, 1570320725, "dropoff"),
    (2, 1570321092, "pickup"),
    (3, 1570321212, "pickup"),
    (3, 1570321213, "eaten"),
    (3, 1570321213, "eaten"),
    (3, 1570322352, "dropoff"),
    (2, 1570323012, "dropoff"),
    (2, 1570322092, "eaten")
  };
    Assert.Equal(4754, TotalTime(input));
  }
}
