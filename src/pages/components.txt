'use client';
import {
  //Breadcrumbs,
  Button,
  //Carousel,
  //CartToZap,
  CheckBox,
  CheckoutWizard,
  DataPicker,
  Drawer,
  //Error,
  Gallery,
  //Header,
  Input,
  Layout,
  Loading,
  //Location,
  Modal,
  MyComponent,
  NotFound,
  OrderWizard,
  //Pagination,
  ProgressBar,
  //RadioButton,
  //ReportError,
  //Select,
  Slider,
  SnackBar,
  Spinner,
  SpinnerWithLogo,
  Stepper,
  TimePicker,
  //Toast,
  Tooltip
} from 'components';
//Alert
import Alert from 'components/Alert';
//Dialog
import Dialog, { DialogAction } from 'components/Dialog';
//Table
import { Table, TableCell, TableHeaderCell, TableRow } from 'components/Table';
//Typography
import { H1, H2 ,P } from 'components/Typography';
//Advertisement
//import { AdvertisementList } from 'components/Advertisement';
import { findProductBySlug, Products } from 'lib/Products';
import { Product } from 'lib/types/Product';
import React from 'react';
import { Base } from 'templates/base';
//styles
import { Container, ContainerDrawable } from 'templates/base/ui/styles';
//InfoCard
import InfoCard from 'ui/InfoCard';

//Product Preview
import ProductCard from '@/ui/product/product-card';
//icons
//import Tooltip from '@mui/material/Tooltip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ComponentsPage() {
  const product: Product[] = findProductBySlug(Products, 'iphone-8-plus');
  //Snackbar
  const [showSnackBar, setShowSnackBar] = React.useState(false);

  const handleShowSnackBar = () => {
    setShowSnackBar(true);
  };

  const handleDismissSnackBar = () => {
    setShowSnackBar(false);
  };
  //fim de SnackBar

  //Inicio Modal

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };
  //Fim do modal
  //inicio do drawer
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  //fim do drawer
  //Inicio de Stepper

  const steps = ['Step 1', 'Step 2', 'Step 3'];
  const currentStep = 2;
  //Fim de stepper
  //Inicio de Alert
  const handleClose = () => {
    // Implementar lógica de fechamento aqui
    // Encontrar o elemento de alerta na DOM
    const alertElement = document.querySelector('.alert');

    // Remover o elemento de alerta da DOM
    if (alertElement) {
      alertElement.remove();
    }
  };
  //Fim de Alert
  //Dialog
  const [showDialog, setShowDialog] = React.useState(false);

  function handleShowDialog() {
    setShowDialog(true);
  }

  function handleDialogClose() {
    setShowDialog(false);
  }

  function handleActionClick(action: DialogAction) {
    console.log('Clicked action:', action);
  }
  const actions: DialogAction[] = [
    { label: 'Cancelar', action: 'cancel' },
    { label: 'OK', action: 'ok' }
  ];

  //fim de Dialog
  //TimePicker
  const [selectedTime, setSelectedTime] = React.useState<Date | undefined>();

  const handleTimeChange = (time: Date | undefined) => {
    setSelectedTime(time);
  };
  //Fim de TimePicker
  //Slider

  const [value, setValue] = React.useState(50);

  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
  };
  //fim de slider
  //Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  //Fim de Carousel
  //Inicio de galery
  const images = [  '/images/1.png',  '/images/2.png',  '/images/3.png',  '/images/4.png',  '/images/5.png'];
    //Fim de galery

  return (
    <Layout title="Components Page">
      <Base>
        <Container>
          <Slider
            value={value}
            min={0}
            max={100}
            step={1}
            onChange={handleSliderChange}
          />
          <p>Value: {value}</p>
        </Container>
        <Container>
          <MyComponent>
            <h1>Selected Time: {selectedTime?.toLocaleTimeString()}</h1>
            <TimePicker
              label="Horário"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </MyComponent>
          <div className="parent">
            <SpinnerWithLogo />
          </div>
          <div>
            <H1>Testando todos os componentes</H1>
            <Spinner />
            {/* <Breadcrumbs items={[{ label: 'Início', link: '/' }, { label: 'Página atual' }]} /> */}
            <Tooltip text="Clique aqui para obter ajuda">
              <Button>Teste de botão</Button>
            </Tooltip>
            <ProgressBar progress={50} />
            {/* <Carousel images={['/image1.jpg', '/image2.jpg', '/image3.jpg']} /> */}
            {/* <CartToZap number="+5511999999999" /> */}
            <CheckBox label="Teste de checkbox" />
            <DataPicker />
            <CheckoutWizard activeStep={1} />
            <OrderWizard status={3} />
            <Stepper steps={steps} currentStep={currentStep} />
            {/* <Pagination currentPage={3} totalPages={10} onPageChange={(page) => console.log(`Mudando para página ${page}`)} /> */}
            {/* <ErrorFallback onRetry={() => console.log('Tentando novamente...')}>
          Ocorreu um erro. Por favor, tente novamente mais tarde.
        </ErrorFallback> */}
            {/* <Header logo="/logo.svg" /> */}
            <Input placeholder="Teste de input" />
            <Loading />
            {/* <Location location="Rua do Teste, 123" /> */}
            {/* <Modal title="Título do modal" onClose={() => console.log('Modal fechado.')}>
          Conteúdo do modal
        </Modal> */}
            <MyComponent>
              {/* <RadioButton label="Opção 1" name="opcoes" value="1" /> */}
              {/* <Select options={[{ value: '1', label: 'Opção 1' }, { value: '2', label: 'Opção 2' }]} /> */}
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderCell>Nome</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john.doe@example.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane.smith@example.com</TableCell>
                  </TableRow>
                </tbody>
              </Table>
            </MyComponent>
            <NotFound />

            {/* <ReportError onReport={() => console.log('Reportando erro...')}>
          Encontrou algum problema? Avise-nos!
        </ReportError> */}
            {/* <Select options={[{ value: '1', label: 'Opção 1' }, { value: '2', label: 'Opção 2' }]} /> */}

            {/* <Toast message="Mensagem de teste" onClose={() => console.log('Toast fechado.')} /> */}
            <MyComponent>
              <button onClick={handleShowSnackBar}>Mostrar snackbar</button>
              <SnackBar
                onDismiss={handleDismissSnackBar}
                duration={3000}
                visible={showSnackBar}
              >
                SnackBar content
              </SnackBar>
            </MyComponent>
            <MyComponent>
              {/* <button onClick={handleShowModal}>Mostrar modal</button>
      <Modal onClose={handleCloseModal} visible={showModal}>
        <h1>Este é um modal</h1>
        <p>Clique fora do modal para fechá-lo</p>
      </Modal> */}
              <button onClick={() => setModalOpen(true)}>Open Modal</button>
              <Modal
                title="My Modal"
                onClose={handleModalClose}
                open={modalOpen}
              >
                <p>This is the content of my modal.</p>
              </Modal>
            </MyComponent>
            <MyComponent>
              <button onClick={handleToggleDrawer}>Open Drawer</button>
              <Drawer open={isDrawerOpen} onClose={handleDrawerClose}>
              <ProductCard
            product={product[0]}
            top={
              <ProductCard.Top>
                <ProductCard.Image />
              </ProductCard.Top>
            }
            center={
              <ProductCard.Center>
                <ProductCard.Variant />
              </ProductCard.Center>
            }
            bottom={
              <ProductCard.Bottom>
                <ProductCard.Left>
                  <ProductCard.Details>
                    <ProductCard.Title />
                    <ProductCard.VariantTitle />
                    <ProductCard.Price />
                  </ProductCard.Details>
                  <ProductCard.BuyButton><i><Tooltip title={'Adicionar ao Carrinho'}><AddShoppingCartIcon/></Tooltip></i></ProductCard.BuyButton>
                </ProductCard.Left>
                <ProductCard.Right>
                  <ProductCard.Done className={'done'} />
                  <ProductCard.RightDetails>
                    <ProductCard.Title />
                    <p>Adicionado ao Carrinho</p>
                  </ProductCard.RightDetails>
                  <ProductCard.Remove className={'remove'} />
                </ProductCard.Right>
              </ProductCard.Bottom>
            }
            inside={
              <ProductCard.Inside>
                <ProductCard.ShortDescription />
              </ProductCard.Inside>
            }
          />
              </Drawer>
            </MyComponent>
            <MyComponent>
              <H1>Alerts Here</H1>
              {/* Alerta com tipo de mensagem: */}
              <Alert
                message="Este é um alerta de sucesso!"
                type="success"
                onClose={() => handleClose()}
              />
              <Alert
                message="Este é um alerta de erro!"
                type="error"
                onClose={() => handleClose()}
              />
              <Alert
                message="Este é um alerta de aviso!"
                type="warning"
                onClose={() => handleClose()}
              />
              <Alert
                message="Este é um alerta informativo!"
                type="info"
                onClose={() => handleClose()}
              />
              {/* Alerta com ação: */}
              <Alert
                message="Você tem uma nova mensagem!"
                type="info"
                onClose={() => handleClose()}
                action={
                  <Button variant="primary" size="medium" contained>
                    Ver mensagem
                  </Button>
                }
              />
              {/* Alerta com fechamento automático: */}
              <Alert
                message="Este alerta fechará em 5 segundos."
                type="warning"
                autoClose={5000}
              />
              {/* Alerta com personalização do estilo: */}
            </MyComponent>
          </div>
          <MyComponent>
            <button onClick={handleShowDialog}>Mostrar diálogo</button>
            <Dialog
              isOpen={showDialog}
              title="Título do diálogo"
              onClose={handleDialogClose}
              actions={actions}
              onActionClick={handleActionClick}
            >
              <p>Conteúdo personalizado do diálogo.</p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </Dialog>
          </MyComponent>
        </Container>
        <Container>
          {/* <Carousel settings={settings}>
      <ProductPreview/>
      <ProductPreview/>
      <ProductPreview/>
    </Carousel> */}
    
         
        </Container>
        <Container>
          <ContainerDrawable >
      {/* <AdvertisementList /> */}
      <InfoCard
  icon="chat"
  title="Suporte"
  description="Qualquer dúvida ou pergunta pode nos contatar. Botão de Chat no canto inferior esquerdo."
/>

<InfoCard
  icon="thumb-up"
  title="Satisfação e Reembolso"
  description="Se não estiver satisfeito, entre em contato conosco."
/>

<InfoCard
  icon="credit-card"
  title="Pagamento Seguro"
  description="Pagamento seguro processado pelo Mercado Pago."
/>

<InfoCard
  icon="local-shipping"
  title="Frete Grátis"
  description="Válido para todo o Brasil. Aproveite!"
/></ContainerDrawable >
<div>
<h1>Gallery Example</h1>
<Gallery images={images} />
</div>
      </Container>
      </Base>
    </Layout>
  );
}
