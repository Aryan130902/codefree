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
    <Footer.Link href="#">
      About
    </Footer.Link>
    <Footer.Link href="#">
      Privacy Policy
    </Footer.Link>
    <Footer.Link href="#">
      Licensing
    </Footer.Link>
    <Footer.Link href="#">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
    
  )
}

export default PageFooter