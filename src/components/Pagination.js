import {Flex,Box} from '@chakra-ui/react'


export function Pagination({setCurrentPage}) {
      
    const pages = [1,2,3,4,5,6,7,8,9,10,11,12]    
    

    return(
    <>
    <Flex justify = 'center' mb = {5} > 

         {pages.map((page,index) => 
         
         <Box 
         as = 'button' 
         height='24px' 
         lineHeight='1.2' 
         transition='all 0.2s cubic-bezier(.08,.52,.52,1)' 
         border='1px' 
         px='8px'  
         borderRadius='2px'          
         fontWeight='semibold'  
         bg='#f5f6f7'  
         borderColor='#ccd0d5'  
         color='#4b4f56'  
         _hover={{ bg: '#ebedf0' }}  
         _active={{ bg: '#dddfe2', transform: 'scale(0.98)', borderColor: '#bec3c9', }} 
         _focus={{ boxShadow:'0 0 1px 2px rgb(42, 130, 214), 0 1px 1px rgba(0, 0, 0, .15)', }}
         mr = {2}                
         fontSize = {{base: "xs", md: "md"}}

         key = {index} 
         onClick = {() => setCurrentPage(page)} > {page} </Box>)}

    </Flex>      
        
    </>
    )
}

