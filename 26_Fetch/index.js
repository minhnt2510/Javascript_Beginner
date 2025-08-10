const temp = fetch("http://localhost:8000/users");

temp.then((res) => res.json()).then((d) => console.log(d));
