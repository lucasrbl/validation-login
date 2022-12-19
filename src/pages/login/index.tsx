import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Column, Container, LoginContainer, Row, Spacing, Title } from './styles'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IFormLogin, defaultValues } from './types'

const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
    password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo Obrigatório')
})




const Login = () => {
    const { control, watch, formState: {errors, isValid }} = useForm({resolver: yupResolver(schema),
        mode: 'onBlur', defaultValues, reValidateMode: 'onChange'});
        const form = watch()    
        console.log(form)



    return (
        <Container>
        <LoginContainer>
            <Column>
                <Title>Login</Title>
                <Spacing />
                <Input name='email' placeholder="Email" control={control} errorMessage={errors.email?.message}/>
                <Spacing />
                <Input name='password' placeholder="Senha" type='password' control={control} errorMessage={errors.password?.message}/>
                <Spacing />
                <Button title='Entrar' disabled={true}/>
            </Column>
        </LoginContainer>
    </Container>
  )
}


export default Login