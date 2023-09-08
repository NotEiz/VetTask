import styled from 'styled-components';

 export const Btn = styled.button`
          background-color: orange;
          color: white;
          font-weight: 600;
          border: none;
          height: 40px;
          padding: 6px 25px;
          border-radius: 6px;
          &:hover{
              cursor: pointer
          }
     `;

     export const DeleteBtn = styled(Btn)`
          background-color: white;
          color: orange;
          border: 1px solid orange;
     `;
