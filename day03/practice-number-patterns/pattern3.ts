const input = +process.argv[2]

if(Number.isNaN(input) || input<=0)
{
  process.exit()
}
for(let i = 1;i<=input;i++)
{
  let result = ''
  for(let j = 0;j<input;j++)
  {
    if(j%2==0){
    result += '0'  
    }
    else{
    result += '1'
    }
  }
  console.log(result)
}