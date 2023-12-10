import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import image from '/img/Rectangle 86.jpg'
const VerifityArticle = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>VERIFICACION ARTICULO</h1>
        <div className={styles.container_two}>
            <p className={styles.letraOne}>Canopy-top measurements do not accurately quantify canopy-scale leaf thermoregulation</p>
            <div className={styles.container_tree}>
                <p className={styles.data}>Marco Antonio Lopez</p>
                <hr className={styles.linear}/>
            </div>
        </div>
        <div className={styles.container_four}>
            <p className={styles.letraTwo}>
                The inner workings of these networks are largely opaque; even the researchers building them have limited intuitions about systems of such scale. The neuroscientist Terrence Sejnowski described the emergence of LLMs this way: “A threshold was reached, as if a space alien suddenly appeared that could communicate with us in an eerily human way. Only one thing is clear—LLMs are not human... Some aspects of their behavior appear to be intelligent, but if not human intelligence, what is the nature of their intelligence?” (9). As impressive as they are, state-of-the-art LLMs remain susceptible to brittleness and unhumanlike errors. However, the observation that such networks improve significantly as their number of parameters and size of training corpora are scaled up (10) has led some in the field to claim that LLMs—perhaps in a multimodal version—will lead to human-level intelligence and understanding, given sufficiently large networks and training datasets. A new AI mantra has emerged: “Scale is all you need” (11, 12). Such claims are emblematic of one side of the stark debate in the AI research community on how to view LLMs. One faction argues that these networks truly understand language and can perform reasoning in a general way (although “not yet” at the level of humans). For example, Google’s LaMDA system, which was pretrained on text and then fine-tuned on dialogue (13), is sufficiently convincing as a conversationalist that it convinced one AI researcher that such systems “in a very real sense understand a wide range of concepts” (14) and are even “making strides toward consciousness” (15). Another machine language expert sees LLMs as a canary in the coal mine of general human-level AI: “There is a sense of optimism that we are starting to see the emergence of knowledge-imbued systems that have a degree of general intelligence” (16). Another group argues that LLMs “likely capture important aspects of meaning, and moreover work in a way that approximates a compelling account of human cognition in which meaning arises from conceptual role” (17). Those who reject such claims are criticized for promoting “AI denialism”
            </p>
            <div>
            <image/>
            </div> 
            
        </div>

    </div>
  )
}

export default VerifityArticle