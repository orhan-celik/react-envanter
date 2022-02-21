import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// GET Model
export const getModelsAsync = createAsyncThunk('model/getModelsAsync', async () => {
    const response = await fetch(process.env.REACT_APP_API_URL+"Model");
    if(response.ok){
        const Models = await response.json();
        return { Models }
    }
});

// ADD Model
export const addModelAsync = createAsyncThunk('model/addModelAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "Model/add",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const responseData = await response.json();
        return { responseData }
    }
});

// DELETE Model
export const deleteModelAsync = createAsyncThunk('model/deleteModelAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "Model/delete",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const Model = await response.json();
        return { Model }
    }
});

// UPDATE Model
export const updateModelAsync = createAsyncThunk('model/updateModelAsync', async (payload) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "Model/update",
        {
            method: 'POST',
            body: JSON.stringify(payload),
            header: {
                'Content-Type': 'application/json',
            },
        });

    if(response.ok){
        const Model = await response.json();
        return { Model }
    }
});

const ModelSlice = createSlice({
    name : "Model",
    initialState : {
        data  : [],
        loading     : false,
        info     : {
            message     : '',
            color       : 'bg-red-500',
            type        : 'error',
            show        : false
        },
        result      : null,
        selected    : [],
        title       : 'Modeller'
    },
    reducers : {
        addModel: (state,action) => {},
        deleteModel: (state,action) => {
            state.data = state.data.filter((Model) => Model.id !== action.payload.id);
        },
        setSelected: (state,action) => {
            state.selected = action.payload
        }
    },
    extraReducers : {
        [getModelsAsync.pending] : (state,action) => {
            state.loading = true
        },
        [getModelsAsync.fulfilled] : (state,action) => {
            state.data = action.payload.Models
            state.loading = false
        },
        [getModelsAsync.rejected] : (state,action) => {
            state.info = {
                message     : 'Hata : '+action.error.message,
                color       : 'bg-red-500',
                type        : 'error',
                show        : true
            };
            state.loading = false
        },
        [addModelAsync.pending] : (state,action) => {
            state.loading = true
        },
        [addModelAsync.fulfilled] : (state,action) => {
            state.loading = false
            if(action.payload.responseData.result == 'error'){
                state.result = action.payload.responseData;
                return;
            }
            
            if(action.payload.responseData.result != 'error'){
                state.result = null;
                state.data.unshift(action.payload.responseData);
                return;
            }
        },
        [addModelAsync.rejected] : (state,action) => {
            state.info = {
                message     : 'Hata : '+action.error.message,
                color       : 'bg-red-500',
                type        : 'error',
                show        : true
            };
            state.loading = false
        },
        [deleteModelAsync.pending] : (state,action) => {
            state.loading = true
        },
        [deleteModelAsync.fulfilled] : (state,action) => {
            const id = action.meta.arg.id;
            state.data = state.data.filter((Model) => Model.id !== id);
            state.loading = false
        },
        [updateModelAsync.pending] : (state,action) => {
            state.loading = true
            console.log('bekleniyorr....');
        },
        [updateModelAsync.fulfilled] : (state,action) => {
            const index = state.data.findIndex((item) => {
                return item.id === state.selected.id
            });
            state.data[index].title = state.selected.title;
            state.selected = []
            state.loading = false;
        },
        [updateModelAsync.rejected] : (state,action) => {
            state.info = {
                message     : 'Hata : '+action.error.message,
                color       : 'bg-red-500',
                type        : 'error',
                show        : true
            };
            state.loading = false
        }
    }
})

export const {addModel, deleteModel, setSelected} = ModelSlice.actions;

export default ModelSlice.reducer;