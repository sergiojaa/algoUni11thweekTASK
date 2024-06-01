//1. შექმენით კლასი სახელად "Person". დააგენერირეთ ობიექტი, რომელსაც ექნება "name" და "age" 
//ფროფერთები და "sayHello" მეთოდი(ეს ყველაფერი კლასშივე უნდა გაუწეროთ). გამოაკონსოლეთ ობიექტის 
//ფროფერთები.
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sayHello(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }
// let person1 = new Person('sergi', 18)
// console.log(person1)
// person1.sayHello()

//2. მემკვიდრეობითობა: შექმენით კლასი "Student", რომელიც იქნება "Person"-ის შთამომავალი
//დაამატეთ ახალი "grade" ფროფერთი.
// class Person{
//     constructor(name,age ){
//         this.name = name
//         this.age = age
//     }
//     sayHello(){
//          console.log(`Hello, my name is ${this.name}`)
//      }
// }
// class Student extends Person{
//     constructor(name, age, grade){
//         super(name,age)
//         this.grade = grade
//     }
// }
// const student1 = new Student('sergi',18,100)
// console.log(student1)


//3. ენკაფსულაცია: შექმენით კლასი სახელად "BankAccount" private ფროფერთით - "balance". 
//დაამატეთ მეთოდები "deposit" და "withdraw" თანხის შეტანა-გამოტანისთვის. შესატან ან გამოსატან 
//თანხას მეთორები უნდა იღებდნენ პარამეტრად. bonus: თუ გამოსატანი თანხა მეტია  არსებულ ბალანსზე, 
//გმოიტანეთ შესაბამისი შეტყობინება.


//4. პოლიმორფიზმი:  შემქენით კლასი "Shape", რომელშიც იქნება მეთოდი სახელად "calculateArea". 
//შექმენით ქვეკლასები "Circle" და "Rectangle", რომლებშიც ახლადშექმნილ მეთოდს გადააწერთ მშობლის მეთოდს.


//5. სტატიკური მეთოდი: შექმენით კლასი "Calculator" სტატიკური მეთოდით, რომელიც პარამეტრად მიიღებს
// ორ რიცხვს და დააბრუნებს მათ ჯამს.


//6. Getter and Setter: შექმენით კლასი "Temperature" private ფორფერთით - "celsius".
// დაამატეთ getter და setter მეთოდები. getter მეთოდი უნდა აბრუნებდეს celsius ფროფერთის.
// setter მეთოდი პარამეტრად უნდა იღებდეს ფარენჰეიტს, გადაჰყავდეს ცელსიუსში და ანიჭებდეს მიღებულ
// მნიშვნელობას celsius ფროფერთის.


//7. შექმენით კლასი - "ArrayHelper" მეთოდით "reverseArray", რომელიც პარამეტრად იღებს მასივს და
// აბრუნებს მის შებრუნებულ ვერსიას.


//8. შექმენით კლასი "Circle", რომელიც დააგენერირებს ობიექტებს "radius" ფროფერთით. დაამატეთ 
//მეთოდები წრის ფართობისა და პერიმეტრის გასაგებად. შექმენით "createCircle" მეთოდი, რომელიც
// დააბრუნებს რაიმე რადიუსის მქონე წრის ობიექტს. (ახალი წრე შექმენით Circle კლასიდან)

