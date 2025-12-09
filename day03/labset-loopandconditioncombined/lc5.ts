const inputs = process.argv.slice(2)

let index = 0;
let value: any;

do {
  value = inputs[index];

  if (value?.includes('admin')) 
  {
    console.log(`${value} ->  Full Access`);
  }
  else if (value?.includes('user')) 
  {
    console.log(`${value} ->  Limited Access`);
  }
  else if (value?.includes('guest')) 
  {
    console.log(`${value} ->  Public Access`);
  }
  else if (value?.includes('unknown')) 
  {
    console.log(`${value} ->  No Access`);
  }
  else{}
  index++;
} while (value != undefined);
