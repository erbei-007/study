#include <iostream>
using namespace std;
 
typedef struct DuLNode
{
	int date;
	struct  DuLNode *prior,*next;
} DuLNode,*DuLinkList;
//初始化
bool InitList_L(DuLinkList &L)
{
	L=new DuLNode;
	if(!L)
		return false;
	L->next=L->prior=NULL;
}
//创建
void CreatDuList_L(DuLinkList &L)
{
	int n;
	DuLinkList p,r;
	L=new DuLNode;
	L->next=L->prior=NULL;
	r=L;
	cout<<"请输入元素个数"<<endl;
	cin>>n;
	cout<<"请依次输入元素"<<endl;
	while(n--)
	{
		p=new DuLNode;
		cin>>p->date;
		p->prior=r;
		p->next=r->next;
		r->next=p;
		r=p;

	}


}





int main()
{
	DuLinkList L;
	int a =InitList_L(L);
	
	CreatDuList_L(L);
	system("pause");
	return 0; 
} 