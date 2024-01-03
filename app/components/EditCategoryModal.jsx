'use client'

import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";

export default function EditCategoryModal({ open, onClose, category }) {

    const router = useRouter()
    const refreshData = () => {
        router.refresh()
    }

    const [editedCategory, setEditedCategory] = useState("");

    const handleSave = async () => {
        try {
            let payload = {
                name: editedCategory
            }
            await fetch(`api/category_employees/${category.id}`, {
                method: "PUT",
                body: JSON.stringify(payload)
            })
            
            refreshData()

        } catch (err) {
            console.log(err)
        } finally {
            onClose();
        }
    };

    useEffect(() => {
        setEditedCategory(category?.name ?? "")
    }, [category])

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" component="div">
                    Edit Kategori
                </Typography>
                <div>
                    <TextField
                        label="Nama Kategori"
                        variant="outlined"
                        defaultValue={editedCategory}
                        onChange={(e) => setEditedCategory(e.target.value)}
                        margin="normal"
                    />
                </div>
                <Button variant="contained" onClick={handleSave}>
                    Simpan
                </Button>
            </Box>
        </Modal>
    );
}