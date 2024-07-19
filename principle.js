const investments = [
    {
      principal: 1000,
      time: 2, // in years
      interestRate: 5, // in percentage
    },
    {
      principal: 5000,
      time: 3, // in years
      interestRate: 4, // in percentage
    },
    {
      principal: 2000,
      time: 1, // in years
      interestRate: 6, // in percentage
    },
  ];
  
  function findInterest(principal, time = 1, interestRate = 5) {
    return principal * (1 + time * interestRate / 100);
  }
  
  const result = investments.map((each) =>
    findInterest(each.principal, each.time, each.interestRate)
  );
  
  console.log(result);
  