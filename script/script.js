let n=1;

const tabList= document.querySelectorAll('.window_menu .list li');
        for(let i=0;i<tabList.length;i++){//태그의 개수만큼 반복하여 가능을 설정함.
            tabList[i].querySelector('.btn').addEventListener('click',function(e){
                e.preventDefault(); //클릭시 이벤트를 무력화하여 아무일도 없게 함.
                for(var j=0;j<tabList.length;j++){//li태그 on클래스 적용
                    tabList[j].classList.remove('on');
                }
                this.parentNode.classList.add('on');//사용자가 선택한항목에 on클래스적용
            });
        }


const tabLis= document.querySelectorAll('.tab_menu .list >li');//밑에 ul 태그로 li 태그를 쓸거면 > 추가하자
        for(let b=0;b<tabLis.length;b++){//태그의 개수만큼 반복하여 가능을 설정함.
            tabLis[b].querySelector('.btn').addEventListener('click',function(v){
                v.preventDefault(); //클릭시 이벤트를 무력화하여 아무일도 없게 함.
                for(var a=0;a<tabLis.length;a++){//li태그 on클래스 적용
                    tabLis[a].classList.remove('on');
                }
                this.parentNode.classList.add('on');//사용자가 선택한항목에 on클래스적용
            });
        }

function bars(){
  if(n==1){
    document.getElementById('bar').className='fas fa-expand-arrows-alt';
    n=0;
  }else{
    document.getElementById('bar').className='fas fa-bars';
    n=1;
  }
}