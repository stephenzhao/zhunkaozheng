import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import canvas2Image from 'utils/canvas2img'
import 'weui';
import Page from 'components/Page';
import baseImg from 'assets/images/base.jpg';
const {
    ButtonArea,
    Button,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
    Uploader
} = WeUI;


class App extends React.Component {
    state = {
            show: false,
            timer: null,
            ctx: null,
            src:null,
            formData:{
                gender: '男',
                name: '拾文',
                location: '腾冲市第一中学'
            }
    };

    componentDidMount() {
        this.show();
        window.form = this.refs.form;
    }

    render() {
        return (
            <Page title="生成准考证" className="cell">
                    <form ref='form' style={{display: this.state.show ? 'none' : 'block'}}
                        onSubmit={(e)=>{
                            e.preventDefault();
                            this.submit(e);
                        }}>
                        <Form>
                            <FormCell>
                                <CellHeader>
                                    <Label>姓名</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input type="text" name="name" onChange={this.handleChange.bind(this)}  placeholder="请输入姓名"/>
                                </CellBody>
                            </FormCell>
                        </Form>
                        <CellsTitle>性别</CellsTitle>
                        <Form radio>
                            <FormCell radio>
                                <CellBody>男</CellBody>
                                <CellFooter>
                                    <Radio onChange={(e) => {this.changeFn(e)}} name="gender" value="1" defaultChecked/>
                                </CellFooter>
                            </FormCell>
                            <FormCell radio>
                                <CellBody>女</CellBody>
                                <CellFooter>
                                    <Radio onChange={(e) => {this.changeFn(e)}} name="gender" value="2"/>
                                </CellFooter>
                            </FormCell>
                        </Form>
                        <Form>
                            <FormCell>
                                <CellHeader>
                                    <Label>考场</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input  ref='location' onChange={this.handleChange.bind(this)} name="location" type="text" placeholder="比如：腾冲市第一中学"/>
                                </CellBody>
                            </FormCell>
                        </Form>
                     <ButtonArea>
                        <Button type="primary" >确认生成</Button>
                    </ButtonArea>
                    </form>
                    <canvas id="canvas" style={{display:'none'}}  ref="canvas" width="484" height="640" ></canvas>
                    <img  style={{display: this.state.show ? 'block' : 'none', width:'100%'}} src={this.state.src} alt=""/>
                    <div style={{display: this.state.show ? 'block' : 'none'}}>
                        <ButtonArea
                        >
                            <Button type="default"
                                onClick={()=>{
                                window.location.reload();
                            }}>重新生成</Button>
                        </ButtonArea>
                    </div>

            </Page>
        );
    }
    drawImg(ctx) {
        var img = new Image();
        img.onload = function () {
            ctx.scale(0.6, 0.6);
            ctx.drawImage(img, 0, 0);
        }
        img.src = baseImg;
    }
    show() {
        var canvas = this.refs.canvas;
        var ctx = canvas.getContext('2d');
        this.drawImg(ctx);
        this.setState({ctx: ctx})
    }
    changeFn(e){
        var formData = this.state.formData;
        var gender = ['', '男', '女'];
        formData['gender'] = gender[e.currentTarget.value];
        this.setState({formData: formData});
    }
    handleChange(event){
      var formData = this.state.formData;
      formData[event.target.name] = event.target.value;
     this.setState({formData: formData});
    }
    submit(e){
        this.addText(this.state.ctx, this.state.formData);
        this.saveImg();
    }
    saveImg(){
        var w = 484;
        var h = 640;
        var img = canvas2Image.convertToJPEG(this.refs.canvas, w, h);
        this.setState({src: img.src});
    }
    addText(ctx, formData) {
        var room = Math.ceil(Math.random() * 40);
        var name = formData.name;
        var gender = formData.gender;
        var location = formData.location;
        var seat = Math.ceil(Math.random() * 60);
        this.setState({show: true});
        if (ctx) {
            ctx.font="28px 宋体";
            ctx.fillStyle="#000";
            ctx.fillText(name,410,415);
            ctx.fillText(gender,640,415);
            ctx.fillText(location,410,485);
            ctx.fillText(room,210,795);
            ctx.fillText(seat,210,870);
        }
    }
}

export default App;