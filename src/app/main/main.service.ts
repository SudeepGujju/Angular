
export class MainService {

   private MobilesList = [{
        "brand": "Samsung",
        "name": "Galaxy A7",
        "device": "a7alte",
        "model": "SM-A700F"
      }, {
        "brand": "Nokia",
        "name": "Nokia 6",
        "device": "D1C",
        "model": "TA-1000"
      },{
        "brand": "OnePlus",
        "name": "3",
        "device": "OnePlus3",
        "model": "ONEPLUS A3000"
      },{
        "brand": "Xiaomi",
        "name": "HM Note 2",
        "device": "hermes",
        "model": "Redmi Note 2"
      },{
        "brand": "Motorola",
        "name": "Moto E (2nd Gen)",
        "device": "otus",
        "model": "MotoE2"
      }];

      LaptopsList = [{
        "brand": "Dell",
        "name": "Inspiron",
        "device": "3000 series",
        "model": "Dell Inspiron 3567"
      },{
          "brand":"Lenovo",
          "name":"ideapad",
          "device":"100",
          model:"100-14IBD"

      }];

      PersonsList=[
      {
        "rank": 1,
        "name": "Bill Gates",
        "Company": "Microsoft",
        "worth in billions": 18.5,
        "INR": 11500000000,
        "dob": "10 28 1955"
      },
      {
        "rank": 2,
        "name": "Warren Buffett",
        "company":"Berkshire Hathaway",
        "worth in billions": 15.0,
        "INR": 22525334.45,
        "dob": "08 30 1930"
      },
      {
        "rank": 3,
        "name": "Paul Allen",
        "company":"Microsoft",
        "worth in billions": 30.4,
        "INR":2175450000.00,
        "dob": "01 21 1953"
      },
      {
        "rank": 4,
        "name": "Lee Shau Kee",
        "company":"Henderson Land Development",
        "worth in billions": 12.7,
        "INR": 24800000000,
        "dob": "01 29 1928"
      }];
    
      getMobilesList()
      {
        return  this.MobilesList;
      }

      getLaptopsList()
      {
          return this.LaptopsList;
      }

      getPersonsList()
      {
        return this.PersonsList;
      }
}