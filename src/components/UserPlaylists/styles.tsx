import styled from "styled-components";

export const Playlist = styled.div`
  display: flex;
  justify-content: center;
  ul {
    list-style: none;
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      text-align: center;
      width: 350px;
      img {
        width: 350px;
        height: 350px;
      }
    }
  }
`;
