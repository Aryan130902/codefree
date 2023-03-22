import React from 'react'
import { Footer } from 'flowbite-react'



const PageFooter = () => {

  return (

<Footer 
  container={true}
  className="bg-bgcolor"
  >
  <Footer.Copyright
    href="#"
    by="Codefree™"
    year={2023}
  />
  <Footer.LinkGroup>
    <Footer.Link href="/">
      About
    </Footer.Link>
    <Footer.Link href="#">
      Contact
    </Footer.Link>
    <Footer.Link href="https://github.com/Aryan130902">
      Github
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
    
  )
}

export default PageFooter