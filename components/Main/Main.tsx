import * as S from './Main.styles'

const Main = ({
  title = 'NextJS Boilerplate',
  description = 'Typescript, ReactJS, NextJS & Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src={'/img/logo.svg'}
        alt={'Atom image, with "React Avançado" typed'}
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src={'/img/hero-illustration.svg'}
        alt={'A developer in front of a screen with  code.'}
      />
    </S.Wrapper>
  )
}

export default Main
