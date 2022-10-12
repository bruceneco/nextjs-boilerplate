import * as S from './Main.styles'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src={'/img/logo.svg'}
        alt={'Atom image, with "React Avançado" typed'}
      />
      <S.Title>NextJS Boilerplate</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS & Styled Components
      </S.Description>
      <S.Illustration
        src={'/img/hero-illustration.svg'}
        alt={'A developer in front of a screen with  code.'}
      />
    </S.Wrapper>
  )
}

export default Main
