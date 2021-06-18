//to fetch data of users 
fetch("user.json")
.then(response => response.json())
.then(data=> {console.log(data);
var render=function (data) {
  var app = document.getElementById('mypost');
  var String = '<ul>'+
    data.map(function(u){
      return '<div class="dis">'+
              '<strong>Name: </strong>' + u.name+ '<br/>' +
              '<strong>ID: </strong>' + u.id + '<br/>' +
              '<strong>Email: </strong>' + u.email + '<br/>' +
              '<a href="Post.html">View Posts</a>'+
            '</div>';
    }).join('');
    + '</div>';
  app.innerHTML = String;
}
render(data);
})

//serach function
function myFunction() {
  let input = document.getElementById('search').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('dis');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="div";                 
      }
  }
}


//fetch data from json and display on page
/*fetch("user.json")
.then(response => response.json())
.then(data=>{console.log(data)
  if(data.length>0)
  {
    var temp="";
    data.forEach((u)=>{
      temp+="<tr>";
      temp+="<td>"+u.id+"</td>";
      temp+="<td>"+u.name+"</td>";
      temp+="<td>"+u.email+"</td>";
      temp+="<td>"+"<a href='Post.html'>View Posts</a>"+"</td></tr>";
    })
    document.getElementById("data").innerHTML=temp;
  }
})


//serach functionality

$('#search').keyup(function(){
      var searchField = $(this).val();
			if(searchField === '')  {
				$('#data').html('');
				return;
			}
			
            var regex = new RegExp(searchField, "i");
            var temp = '<tr>';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.name.search(regex) != -1) || (val.name.search(regex) != -1)) {
           temp+="<td>"+val.id+"</td>";
           temp+="<td>"+val.name+"</td>";
            temp+="<td>"+val.email+"</td>";
           temp+="<td>"+"<a href='Post.html'>View Posts</a>"+"</td></tr>";
				  if(count%2 == 0){
					output += '<tr>'
				  }
				  count++;
				}
			  });
			  output += '<tr>';
			  $('#data').html(output);
        });


$.getJSON("user.json",function(data)
{
  var items= [];
  $.each(data,function(key,val)
  {
    items.push("<tr>");
    items.push("<td id=''"+key+"''>"+val.id+"</td");
    items.push("</tr>");
  });
  $("<tbody/>",{html:items.join("")}.appendTo("table"));
});

const myFunction= () =>
{
  var txtValue;
  let filter= document.getElementById('search').value.toUpperCase();
  let mytable=document.getElementById('mytable');
  let tr=mytable.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) 
  {
    let td=tr[i].getElementsByTagName('td')[0];
    if(td)
    txtValue = td.textContent || td.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1)
    {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }


}*/

/*
function myFunction() {
  // Declare variables
  var input, filter,div,post, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  post= document.getElementById('mypost');
  a= post.getElementsByTagName('div');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < a.length; i++) {
    div= a[i].getElementById('<div>')[1];
    if(div)
    txtValue = div.textContent || div.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}*/
/*function fetchD()
{
fetch("https://reqres.in/api/users")
.then(response =>{
  if(!response.ok)
  {
    throw Error("Error");

  }
 return response.json();})
.then(data=>{
  console.log(data.data);
  const html =data.data
  .map(user=>{
    return <div class ="user">
      <p>Id: ${user.first_name}</p>
      <p>Id: ${user.email}</p>
    </div>
    ;
  })
  .join("");
  document.querySelector("#mypost").insertAdjacentHTML("afterbegin",html);
})
.catch(error=>
  {
    console.log(error);
  });
}
fetchD();*/
/*
//to search data
fetch("user.json")
.then(response => response.json())
.then(data_print=> {
var handleSearch = function(event) {
  event.preventDefault();
  // Get the search terms from the input field
  var searchTerm = event.target.elements['search'].value;
  // Tokenize the search terms and remove empty spaces
  var tokens = searchTerm
                .toLowerCase()
                .split(' ')
                .filter(function(token){
                  return token.trim() !== '';
                });
 if(tokens.length) {
  //  Create a regular expression of all the search terms
  var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
  var filteredList = data_print.filter(function(u){
    // Create a string of all object values
    var bookString = '';
    for(var key in u) {
      if(u.hasOwnProperty(key) && u[key] !== '') {
        bookString += u[key].toString().toLowerCase().trim() + ' ';
      }
    }
    return bookString.match(searchTermRegex);
  });
  // Render the search results
 
  render(filteredList);
 }
}
document.addEventListener('submit', handleSearch);
document.addEventListener('reset', function(event){
  event.preventDefault();
  render(data_print);
})
})*/ 