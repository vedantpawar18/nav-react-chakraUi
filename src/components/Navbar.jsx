import React from 'react'
import styles from "../components/navbar.module.css"
import { Tooltip,Button,Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
        <div className={styles.navbar}>
            <div className={styles.btns}>
              <h2>Logo</h2>
                <Tooltip hasArrow label='Explore Design Work' bg='white' color="black">
                  <Button bg="white" _hover={{bg:"white"}}>Inspiration</Button>
                </Tooltip>
                <Tooltip hasArrow label='Explore Design Work' bg='white' color="black">
                  <Button bg="white" _hover={{bg:"white"}}>Find Work</Button>
                </Tooltip>
                <Tooltip hasArrow label='Explore Design Work' bg='white' color="black">
                  <Button bg="white" _hover={{bg:"white"}}>Learn Design</Button>
                </Tooltip>
                <Tooltip hasArrow label='Explore Design Work' bg='white' color="black">
                  <Button bg="white" _hover={{bg:"white"}}>Hire</Button>
                </Tooltip>
            </div>
            <div className={styles.lgn}>
              <div></div>
              <div className={styles.inbox}>
              <Link>Sign In</Link>
              <Button colorScheme='pink' size='md'>
                Sign Up
              </Button>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar