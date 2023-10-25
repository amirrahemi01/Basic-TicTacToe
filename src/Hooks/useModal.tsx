import React, { useState } from 'react'

type Props = {}

export default function useModal() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return {isOpen, toggle};
}