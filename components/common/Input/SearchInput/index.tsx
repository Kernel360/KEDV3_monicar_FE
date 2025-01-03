'use client'

import Image from 'next/image'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import BaseInput from '../BaseInput'

import * as styles from './styles.css'

type SizeType = 'small' | 'medium' | 'large'

interface SearchInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
    icon?: string
    size?: SizeType
    className?: string
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    ({ icon, size = 'medium', className = '', ...props }, ref) => {
        return (
            <div className={`${styles.container} ${styles.sizeVariants[size]} ${className}`}>
                <BaseInput ref={ref} className={styles.input} {...props} />
                {icon && (
                    <div className={styles.iconWrapper}>
                        <Image src={icon} alt='서치인풋 아이콘' width={32} height={32} />
                    </div>
                )}
            </div>
        )
    },
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
