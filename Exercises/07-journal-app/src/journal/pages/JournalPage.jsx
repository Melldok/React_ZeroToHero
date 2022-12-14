import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"


export const JournalPage = () => {
  return (
    <>
        <JournalLayout>
        {/* <Typography>JLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo</Typography> */}

        <NothingSelectedView />

        {/* <NoteView /> */}

        <IconButton 
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover' : { backgroundColor: 'error.main', opacity: 0.9},
            position: 'fixed',
            right: 50,
            bottom : 50
          }}
          >
            <AddOutlined  sx={{ fontSize: 30}} />

        </IconButton>

        </JournalLayout>
        
        
    </>

  )
}
