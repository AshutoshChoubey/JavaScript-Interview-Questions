class List{
    constructor(value=null){
        this.value=value;
        this.next=null;
        
    }
}

class LinkList{
    length=0;
    constructor(value=null){
        if(value===null){
            this.head=null
            this.tail=null
        }
        else{
            let list=new List(value);
            this.head=list;
            this.tail=list;
            this.length++
        }
    }
    append(value){
        let list=new List(value);
        if(this.head===null){
            this.head=list;
            this.tail=list;
        }else{
            this.tail.next=list;
            this.tail=list;
            this.length++;
        }
        
    }
}
link=new LinkList();
link.append(10)
link.append(20)
link.append(30)
console.log(JSON.parse(link));