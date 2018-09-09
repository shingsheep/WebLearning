//双向链表
function DoublyLinkedList() {
    var node=function(element){
        this.element=element;
        this.prev=null;
        this.next=null;
    };
    var length=0;
    var head=null;
    var tail=null;

    this.insert = function(position, element){
        if(position<0 || postion >length){
            return false;
        }else{
            var node=new Node(element);
            var current=head,
                previous,
                index=0;
            if(position===0){
                if(!head){
                    head=node;
                    tail=node;
                }else{
                    head=node;
                    node.next=current;
                    current.prev=node;
                }
            }else if(position===length){
                current=tail;
                current.next=node;
                node.prev=current;
                tail=node;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                current.prev=node;
                previous.next=node;
                noode.prev=previous;
            }
            return true;
        }
    };

    //删除元素，从头部、从中间和从尾部移除一个元素
    this.removeAt = function (position){
        if(position<0 || position >length){
            return false;
        }
        else{
            var current=head,
                previous,
                inde=0;
            if(position===0){
                head=current.next;
                if(length===1){
                    tail=null;
                }else{
                    head.prev=null;
                }
            }else if(position===length-1){
                current=tail;
                tail=current.prve;
                tail.next=null;
            }else{
                while(inde++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
                current.next.prev=previous;
            }
            length--;
            return true;
        }
    };
}