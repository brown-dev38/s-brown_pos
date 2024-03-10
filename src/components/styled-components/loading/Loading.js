import styled from "styled-components";

const Loading = styled.div`
  width: 4px;
  color: #eee;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow:
    19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
    19px 0     0 5px, 38px 0     0 5px, 57px 0     0 5px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px;
  transform: translateX(-38px);
  animation: l26 2s infinite linear;

@keyframes l26 {
  12.5% {box-shadow:
    19px -19px 0 0px orange, 38px -19px 0 0px yellow, 57px -19px 0 5px blue,
    19px 0     0 5px pink, 38px 0     0 0px green, 57px 0     0 5px gray,
    19px 19px  0 0px brown, 38px 19px  0 0px red, 57px 19px  0 0px orange}
  25%   {box-shadow:
    19px -19px 0 5px brown, 38px -19px 0 0px red, 57px -19px 0 5px orange,
    19px 0     0 0px pink, 38px 0     0 0px green, 57px 0     0 0px gray,
    19px 19px  0 0px orange, 38px 19px  0 5px yellow, 57px 19px  0 0px blue}
  50%   {box-shadow:
    19px -19px 0 5px brown, 38px -19px 0 5px red, 57px -19px 0 0px orange,
    19px 0     0 0px orange, 38px 0     0 0px yellow, 57px 0     0 0px gray,
    19px 19px  0 0px pink, 38px 19px  0 0px green, 57px 19px  0 5px gray}
  62.5% {box-shadow:
    19px -19px 0 0px orange, 38px -19px 0 0px yellow, 57px -19px 0 0px blue,
    19px 0     0 5px pink, 38px 0     0 0px green, 57px 0     0 0px gray,
    19px 19px  0 0px brown, 38px 19px  0 5px red, 57px 19px  0 5px orange}
  75%   {box-shadow:
    19px -19px 0 0px brown, 38px -19px 0 5px red, 57px -19px 0 0px orange,
    19px 0     0 0px pink, 38px 0     0 0px green, 57px 0     0 5px gray,
    19px 19px  0 0px orange, 38px 19px  0 0px yellow, 57px 19px  0 5px blue}
  87.5% {box-shadow:
    19px -19px 0 0px brown, 38px -19px 0 5px red, 57px -19px 0 0px orange,
    19px 0     0 0px orange, 38px 0     0 5px yellow, 57px 0     0 0px gray,
    19px 19px  0 5px pink, 38px 19px  0 0px green, 57px 19px  0 0px gray}
}
`;

export default Loading;