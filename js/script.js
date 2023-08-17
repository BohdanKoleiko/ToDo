'use strict'

document.addEventListener('DOMContentLoaded', () => {
   const todoInputTask = document.querySelector('.todo__input-task');
   const ul = document.querySelector('.todo__results');

   // the input where a user writes him/her task
   const input = todoInputTask.querySelector('input');
   // the btn that adds task the user have written
   const addTaskBtn = todoInputTask.querySelector('button');

   const addTask = function () {
      if (input.value) {
         const createLi = document.createElement('li');
         const createSpan = document.createElement('span');
         createSpan.innerText = input.value;
         createLi.innerHTML = `
         <span class='todo__close-btn'>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
               <g id="x-lg">
                  <path id="x (Stroke)" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="inherit"/>
               </g>
            </svg>
         </span>
         `;
         createLi.prepend(createSpan);
         ul.append(createLi);
         input.value = '';

         removeTask();
      }
   }

   function removeTask() {
      let removeTaskBtns = document.querySelectorAll('.todo__close-btn');

      removeTaskBtns.forEach((btn, i) => {
         btn.addEventListener('click', () => {
            btn.parentElement.remove();
         });
      });
   }

   function listItemsCheck() {
      ul.addEventListener('click', function (e) {
         let target = e.target;

         if (target.tagName === 'LI') {
            target.classList.toggle('checked');
         } else if (target.tagName === 'SPAN') {
            target.parentElement.classList.toggle('checked');
         }
      });
   }


   addTaskBtn.addEventListener('click', addTask);
   document.addEventListener('keypress', (e) => {
      if (e.code.toLowerCase() === 'enter') {
         addTask();
      }
   });

   removeTask();
   listItemsCheck();
});        