//class definitions & utility methood create person 
class Person
{
    constructor(fullName,address) {
        [this.fullName,this.address]	=	[ fullName ,address]
    }

    isSameFullName(person) {
        return this.fullName  && 
            person.fullName && 
            this.fullName.firstName &&
            this.fullName.lastName &&
            this.fullName.firstName===person.fullName.firstName &&
            this.fullName.lastName===person.fullName.lastName;
    }
    isSameAddress(person) {
        return this.address  && 
            person.address && 
            this.address.street &&
            this.address.city &&
            this.address.city===person.address.city &&
            this.address.street===person.address.street;
    }

    isRelated(person) {
        return this.isSameAddress(person)||this.isSameFullName(person);
    }
}
class FullName
{
    constructor(firstName,lastName) {
        [this.firstName,this.lastName]	=	[ firstName ,lastName];
    } 
}
class Address
{
    constructor(street,city)	{
        [this.street,this.city]	=	[ street ,city];
    }
}

const createPerson=(firstName,lastName,street,city) =>
                        new Person(
                            fullname=new FullName(firstName,lastName),
                            address=new Address(street,city)
                            );
module.exports = 
    {Person,
    createPerson};
