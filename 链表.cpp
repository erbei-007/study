#include <iostream>
using namespace std;


typedef struct LNode
{
	int date;
	struct LNode *next;
}LNode,*LinkList;
//链表初始化
bool InitList_L(LinkList &L)
{
	L=new LNode;
	if(!L)
		return false;
	L->next=NULL;
	return true;
}
//创建链表
void CreateList_H(LinkList &L)
{
	/*int n;
	LinkList p,r;
	L=new LNode;
	L->next=NULL;
	r=L;
	cout<<"请输入元素的个数n"<<endl;
	cin>>n;
	cout<<"依次输入n个元素"<<endl;
	while(n--)
	{
		p=new LNode;
		cin>>p->date;
		p->next=NULL;
		r->next=p;
		r=p;
		cout<<p->date<<endl;
	    cout<<p->next<<endl;
	}

*/






	int n;
	LinkList s,r; //定义一个指针变量
	L=new LNode;
	L->next=NULL;
	r=L;//尾指针r指向头节点
	cout<<"请输入元素的个数n"<<endl;
	cin>>n;
	cout<<"依次输入n个元素"<<endl;
	while(n--)
	{
		s=new LNode;
		cin>>s->date;
		s->next=NULL;
		r->next=s;
		r=s;
		cout<<s->date<<endl;
	    cout<<s->next<<endl;
		//cout<<s<<endl;
	}
}
//取值
bool GetElem_L(LinkList L,int i,int &e)//i表示要取得第i个元素
{
	int j;
	LinkList p;
	p=L->next;
	j=1;
	while(j<i&&p)
	{
		p=p->next;
		j++;
	}
	if(j>i||!p)
	{
		return false;
	}
	e=p->date;
	cout<<"取到的值为"<<e<<endl;
	return true;
}
//查找
bool LocateElem_L(LinkList L,int e)
{
	LinkList p;
	p=L->next;
	while(p->date!=e&&p)
	{
		p=p->next;
	}
	if(!p)
		return false;
	return true;
}
//插入
bool ListInsert_L(LinkList &L,int i,int e )
{
	LinkList p,s;
	p=L;
	int j=0;
	while(!p&&j<i-1)
	{
		p=p->next;
		j++;
	}
	if(!p||j>i-1)
		return false;
	s=new LNode;
	s->date=e;
	s->next=p->next;
	p->next=s;
	cout<<"插入的位置为"<<i<<endl;
	cout<<"插入的数据为"<<s->date<<endl;
	
}
//删除	 
bool ListDelete_L(LinkList &L,int i)
{
	LinkList p,q;
	p=L->next;
	int j=0;
	while(p&&(j<i-1))
	{
		p=p->next;
		j++;
	}
	if(!p||i>i-1)
		return false;
	q=p->next;
	p->next=q->next;
	delete q;
	return true;
} 
	 
	 int main()
{
	LinkList L;
	InitList_L(L);
	int e;
	CreateList_H(L);
	/*int a =GetElem_L( L,2,e);
	cout<<a<<endl;*/
	
	/*int b=LocateElem_L(L, 2);
	cout<<b<<endl;*/
	/*int c=ListInsert_L(L,2,3);
	cout<<c<<endl;*/

	system("pause");
	return 0; 
}