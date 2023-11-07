//1.class -MOvie
class Movie
{
    constructor(Title,studio,rating="PG")
    {
        this.Title=Title;
        this.studio=studio;
        this.rating=rating;
    }
    get Rating()
    {
        return  this.rating;
    }
}
const movie1=new Movie("LEO","seven screen studio")
const movie2=new Movie("Casino Royale","Eon productions","PG")
console.log("This rating is displayed using get method:",movie1.Rating);
console.log(`This result is displayed when no rating or default rating is provided,
Name:${movie1.Title}
Studio:${movie1.studio}
Rating:${movie1.rating}`)
console.log(`This result is displayed when rating is provided,
Name:${movie2.Title}
Studio:${movie2.studio}
Rating:${movie2.rating}`)


//2.Convert the UML diagram to Typescript class. - use number for double

class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle()
    {
        return this.radius;
    }
    set radiusCircle(radius)
    {
        this.radius=radius;
    }
    get colorCircle()
    {
        return this.color;
    }
    set colorCircle(color)
    {
        this.color=color;
    }
    get tostring(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`
    }
get areaCircle()
{
    return Math.PI*this.radius;
}
get circumferenceCircle()
{
    return 2*Math.PI*this.radius;
}

}
var obj1=new circle(1.0,"red");
console.log(obj1.radiusCircle);
obj1.radiuscircle=2.2
console.log(obj1.radiusCircle);
console.log(obj1.colorCircle);
obj1.colorCircle="yellow";
console.log(obj1.colorCircle);
console.log(obj1.tostring);
console.log(obj1.areaCircle);
console.log(obj1.circumferenceCircle);

//3.Write a “person” class to hold all the details.
class Person
{
    constructor(name,age,gender,qualification)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
    }
}
    const person1=new Person("shanmathi",29,"Female","BE")
    const person2=new Person("suganya",29,"Female","BE")
    console.log(`Hereby,printing the details of 2 persons,
person1:
     Name:${person1.name}
     Age:${person1.age}
     Gender:${person1.gender}
     Qualifiation:${person1.qualification}`)
console.log(`person2:
     Name:${person2.name}
     Age:${person2.age}
     Gender:${person2.gender}
     Qualifiation:${person2.qualification}`)
    // console.log('Name:',person1.name)
    // console.log('Age:',person1.age)
    // console.log('Gender:', person1.gender)
    // console.log('Qualification:',person1.qualification)


//4.write a class to calculate the uber price.

class UberPrice
{
    constructor(km,pr=100)
    {
        this.km=km;
        this.pr=pr;
    }
    get Price()
{
return this.km*this.pr;
}
}
var uber1=new UberPrice(5);
var uber2=new UberPrice(5,200);
console.log("This result is based on default value:",uber1.Price);
console.log("This result is based on values given in console:",uber2.Price);
