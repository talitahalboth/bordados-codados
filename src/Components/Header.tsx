import { ColourList } from "./styles"

const Header = () => {
    return (
        <div style={{
            height: '60px',
            backgroundColor: ColourList.colorPrimaryDark,
            color: "white",
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <span>{"Something will go here eventually"}</span>

        </div >
    )

}

export default Header