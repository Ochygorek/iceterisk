import Link from 'next/link'

function button(prop: any) {
  return (
    <Link className={`button ${prop.variant === 'filled' ? 'filled' : 'outlined'} ${prop.variant === 'higlight' ? 'higlight' : ''} ${prop.variant === 'ghost' ? 'ghost' : ''} ${prop.size === 'large' ? 'large' : ''}`} href={prop.href}>{prop.content}</Link>
  )
}

export default button