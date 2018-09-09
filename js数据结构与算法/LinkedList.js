//单链表
function LinkedList(){

    var Node=function (element) {
        this.element=element;
        this.next=null;
    };

    var length=0;
    var head=null;

    this.append = function (element) {
        var node=new Node(element);
        var current;
        if(head === null){
            head=node;
        }else{
            current=head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        length++;
    };

    this.insert = function(position, element) {
        if(position>-1 && position<length){
            var node=new Node(element),
                current=head,
                previous,
                index=0;
            if(position===0){
                head=node;
                node.next=current;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=node;
                node.next=current;
            }
            return true;
        }else {
            return false;
        }
    };

    this.removeAt = function(position) {
        if(position>-1 && position<length){
            var current=head,
                previous,
                index=0;
            //移除头
            if(position===0){
                head=current.next;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    };

    // indexOf方法接收一个元素的值，如果在列表中找到
    // 它，就返回元素的位置，否则返回-1
    this.indexOf = function(element) {
        var current=head,
            index=-1;
        while(current){
            if(current.element===element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    };

    this.isEmpty = function() {
        return length===0;
    };

    this.size = function () {
        return length;
    };

    //把LinkedList对象转换成一个字符串
    this.toString = function(){
        var current=head;
        var string='';
        while(current){
            string += current.element;
            current=current.next;
        }
        return string;
    };

    this.getHead = function () {
        return head;
    };
}