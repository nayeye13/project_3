// 마퀴 이벤트
// const pTag1=document.querySelector('.first_parallel')
// const pTag2=document.querySelector('.second_parallel')
// const pTag3=document.querySelector('.third_parallel')
// const pTag4=document.querySelector('.forth_parallel')

// const textArr1='HISGNOSIS HISGNOSIS HISGNOSIS HISGNOSIS HISGNOSIS HISGNOSIS HISGNOSIS HISGNOSIS HISGNOSIS HISGNOSIS'.split('')
// const textArr2='LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG LONG'.split('')
// const textArr3='PLAYING PLAYING PLAYING PLAYING PLAYING PLAYING PLAYING PLAYING PLAYING PLAYING PLAYING PLAYING PLAYING'.split('')
// const textArr4='STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY STORY'.split('')

// let count1=0
// let count2=0
// let count3=0
// let count4=0

// initTexts(pTag1, textArr1)
// initTexts(pTag2, textArr2)
// initTexts(pTag3, textArr3)
// initTexts(pTag4, textArr4)

// function initTexts(element, textArray){
//          textArray.push(...textArray)
//          for(let i=0;i<textArray.length;i++){
//                   element.initTexts +=
//                   '${textArray[i]}\u00A0\u00A0\u00A0\u00A0'
//          }
// }

// function marqueeText(count, element, direction){
//          if(count>element.scrollWidth/2){
//                   element.style.transform='translate3d(0,0,0)'
//                   count=0
                  
//          }
//          element.style.transform='translate3d(${direction*count}px,0,0)'
//          return count
// }

// function animate(){
//          count1++
//          count2++
//          count3++
//          count4++

//          count1=marqueeText(count1, pTag1, -1)
//          count2=marqueeText(count2, pTag2, 1)
//          count3=marqueeText(count3, pTag3, -1)
//          count4=marqueeText(count4, pTag4, 1)

//          window.requestAnimationFrame(animate)
// }

// function scrollHandler(){
//          count1 += 15
//          count2 += 15
//          count3 += 15
//          count4 += 15
// }

// window.addEventListener('scroll',scrollHandler)
// animate()

// 메뉴
// $(document).ready(function(){
//          $('#menu-icon').click(function(){
//                   $('#menu').css('width','100%');
//          });

//          $('.closebtn').click(function(){
//                   $('#menu').css('width','0');
//          });
// });

function openNav(){
         document.getElementById("menu").style.width ="100%";
}
function closeNav(){
         document.getElementById("menu").style.width ="0%"
}