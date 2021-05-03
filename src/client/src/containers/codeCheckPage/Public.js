import React from 'react'

import Title from '../../components/title/Title'
import InputCode from '../../components/pages/codeCheckPage/InputCode'

const Public = () => {
  const problemInfo = {
    classInfo: '데이터베이스1(김지환)',
    weekInfo: '7주차 실습',
    problemInfo: '동물 보호소',
    startTime: 'Infinite',
    endTime: 'Infinite',
  }

  const dummyCode = `#include <stdio.h>
  #include <stdlib.h>
  #include <string.h>
  
  typedef struct
  {
      char *list;
      int maxSize;
      int size;
  } Stack;
  
  Stack *initStack(int maxSize)
  {
      Stack *stack = (Stack *)malloc(sizeof(Stack));
      stack->maxSize = maxSize;
      stack->size = 0;
      stack->list = (char *)malloc(maxSize * sizeof(char));
  
      return stack;
  }
  
  char pop(Stack *stack)
  {
      return stack->list[--(stack->size)];
  }
  
  void push(Stack *stack, char newElem)
  {
      stack->list[(stack->size)++] = newElem;
  }
  
  void peek(Stack *stack)
  {
      printf("%c\n", stack->list[stack->size - 1]);
  }
  
  void duplicate(Stack *stack)
  {
      char popped = pop(stack);
      push(stack, popped);
      push(stack, popped);
  }
  
  void upRotate(Stack *stack, int n)
  {
      int index = stack->size - 1;
      char temp;
  
      if (n > stack->size)
          return;
  
      for (int i = 0; i < n - 1; ++i)
      {
          temp = stack->list[index - i];
          stack->list[index - i] = stack->list[index - i - 1];
          stack->list[index - i - 1] = temp;
      }
  }
  
  void downRotate(Stack *stack, int n)
  {
      int index = stack->size - n;
      char temp;
  
      if (n > stack->size)
          return;
  
      for (int i = 0; i < n - 1; ++i)
      {
          temp = stack->list[index + i];
          stack->list[index + i] = stack->list[index + i + 1];
          stack->list[index + i + 1] = temp;
      }
  }
  
  void printStack(Stack *stack)
  {
      for (int i = stack->size - 1; i >= 0; --i)
          printf("%c", stack->list[i]);
      printf("\n");
  }
  
  void freeStack(Stack *stack)
  {
      free(stack->list);
      free(stack);
  }
  
  int main()
  {
      int N, orderCnt;
      scanf("%d%d", &N, &orderCnt);
      getchar();
  
      Stack *stack = initStack(N);
  
      char order[10], newElem;
      int rotateCnt;
      while (orderCnt--)
      {
          scanf("%s", order);
          getchar();
  
          if (strcmp(order, "POP") == 0)
          {
              if (stack->size == 0)
                  printf("Stack Empty\n");
              else
                  pop(stack);
          }
          else if (strcmp(order, "PUSH") == 0)
          {
              scanf("%c", &newElem);
              getchar();
  
              if (stack->size == stack->maxSize)
                  printf("Stack FULL\n");
              else
                  push(stack, newElem);
          }
          else if (strcmp(order, "PEEK") == 0)
          {
              if (stack->size == 0)
                  printf("Stack Empty\n");
              else
                  peek(stack);
          }
          else if (strcmp(order, "DUP") == 0)
          {
              if (stack->size == 0)
                  printf("Stack Empty\n");
              else if (stack->size == stack->maxSize)
                  printf("Stack FULL\n");
              else
                  duplicate(stack);
          }
          else if (strcmp(order, "UpR") == 0)
          {
              scanf("%d", &rotateCnt);
              getchar();
              upRotate(stack, rotateCnt);
          }
          else if (strcmp(order, "DownR") == 0)
          {
              scanf("%d", &rotateCnt);
              getchar();
              downRotate(stack, rotateCnt);
          }
          else if (strcmp(order, "PRINT") == 0)
              printStack(stack);
      }
  
      freeStack(stack);
  }`

  return (
    <div>
      <Title problemInfo={problemInfo} />
      <InputCode code={dummyCode} />
    </div>
  )
}

export default Public
