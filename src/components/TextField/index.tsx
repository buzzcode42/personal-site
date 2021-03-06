import React, { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type InputFieldProps = {
  onInputChange?: (value: string) => void
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputField = ({
  icon,
  iconPosition = 'left',
  name,
  initialValue,
  error,
  disabled = false,
  onInputChange,
  ...props
}: InputFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }
  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="email"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default InputField
