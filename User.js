class User
{
    myUserId = "";
    myName = "";
    
    constructor (name, id) {
        myName = name;
        myUserId = id;
    }

    get getName()
    {
        return this.myName;
    }
    
    get getUserId()
    {
        return thiis.myUserId;
    }
}