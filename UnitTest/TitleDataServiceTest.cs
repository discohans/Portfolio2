﻿using System;
using System.Linq;
using DataService.Objects;
using DataService.Services;
using Xunit;


namespace PortFolio2.Tests
{
    public class TitleDataServiceTest
    {
        [Fact]
        public void GetGenre()
        {
            var service = new TitleDataService();
            var genre = service.GetGenre(1);
            Assert.Equal(1, genre.Id);
            Assert.Equal("Sport", genre.Name);
        }
    }
}