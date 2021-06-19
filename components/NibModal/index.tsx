import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function NibModal(props: any) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.close}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {props.NIB.status == "ERR" ? "Maaf - " : "NIB Aktif - "}
          {props.NIB.message}
        </ModalHeader>
        <ModalCloseButton />
        {props.NIB.status !== "ERR" && (
          <ModalBody>
            <div>NIB : {props.NIB.data.nib}</div>
            <div>Tanggal Terbit NIB : {props.NIB.data.tanggal_terbit_oss}</div>
            <div>Nama Perusahaan : {props.NIB.data.nama_perusahaan}</div>
            <div>Jenis NIB : {props.NIB.data.jenis_nib}</div>
            <div>Status NIB : {props.NIB.data.stat_nib}</div>
            <div>Status Izin : {props.NIB.data.stat_izin}</div>
            <div>Kepabeanan : {props.NIB.data.kepabeanan}</div>
            <div>Ekspor : {props.NIB.data.ekspor}</div>
            <div>Impor : {props.NIB.data.impor}</div>
          </ModalBody>
        )}
        {props.NIB.status == "ERR" && (
          <ModalBody>
            Silahkan cek kembali nomor NIB dan pastikan tanggal NIB benar
            (format: dd-mm-yyyy)
          </ModalBody>
        )}

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.close}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
