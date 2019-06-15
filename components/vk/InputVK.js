import Input from '@material-ui/core/Input'

export default (props) => (
    <div>
        <Input
            placeholder="Найти по фамилии"
            onKeyDown={
                props.handleKeyDown
            }
        />
    </div>
)
