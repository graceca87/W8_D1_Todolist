
let dateStyle = {
    fontFamily: 'Amatic SC, cursive'
}

// function to display the current day
export default function getDate() {
  const current = new Date();
  const options = { weekday: 'long'};
  const date = `${new Intl.DateTimeFormat('en-US', options).format()} ${current.getMonth()+1}.${current.getDate()}.${current.getFullYear()}`;
  return (
    <div className="App">
      <h4 className= 'text-center' style = {dateStyle}>{date}</h4>
    </div>
  );
}


// console.log(new Intl.DateTimeFormat('en-US', options).format());
// Monday