import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type AddPost = {
    authorId?: string
    authorAvatar?: string
    content: string
    img?: string
}
const initialState: AddPost[] = []


const HomePageSlice = createSlice({
    name: 'HomePage',
    initialState,
    reducers: {

        addPost(state,action: PayloadAction<AddPost>){

            state.unshift({
                authorAvatar: "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if2/utMxxkkNeLmZOlUIjDvc99o1cLzDX1W6BT-Mtf5c8ebu-9ffm_zEdSQ1IO8LH896SH3zAZTw0uUkBfn3HaPc1ZUT.jpg?size=50x50&quality=96&crop=1021,0,1539,1539&ava=1",
                content: action.payload.content,
                authorId:'1'
            })
        }
    },
})
export const {addPost}=HomePageSlice.actions

export default HomePageSlice.reducer
