using Xunit;

namespace SingleAndReadyToMingle.Tests
{
    public class SingleAndReadyToMingleTests
    {
        [Fact]
        public void Test1()
        {
            //Arrange, Act, Assert
            var MyArray = new int[] {2, 4, 6, 8, 10, 2, 6, 10};
            var singlesArray = new Singles();

            //Act
            var result = singlesArray.GetSingles(MyArray);
            var expected = new int[] {4,8};

            //Assert
            Assert.Equal(result, expected);
        }

        [Fact]
        public void Test2()
        {
            //Arrange
            var MyArray = new int[] {1, 2, 3, 2, 1, 4, 4, 6, 7, 8, 7, 6, 9, 9};
            var singlesArray = new Singles();

            //Act
            var result = singlesArray.GetSingles(MyArray);
            var expected = new int[] {3,8};

            //Assert
            Assert.Equal(result, expected);
        }
    }
}
