<template>
    <div>
        <Header />
        <main>
            <h1>Gestão de Pedidos</h1>
            <form action="#" method="post">
                <InputField label="ID" type="text" name="id" id="iid" placeholder="auto" readonly width="120px"/>
                <InputField label="Data" type="text" name="date" id="idate" placeholder="dd/mm/aaaa" maxlength="10" width="200px" />
                <InputField label="Responsável" type="text" name="name" id="iresp" placeholder="Ex.: Agostinho de Hipona" maxlength="11" width="346px" />
                <div>
                    <button id="history">HISTÓRICO</button>
                    <button type="submit" id="create">CRIAR</button>
                </div>
            </form>
        </main>
        <Footer />                     
    </div>
</template>

<style scoped>
main {
    padding: var(--spacing-md);

    font-family: 'Montserrat';
}

main h1 {
    padding-bottom: var(--spacing-md);
    
    font-weight: 700;
    font-size: var(--font-size-lg);
    text-align: center;
    text-shadow: 0px 4px 4px rgba(47, 50, 57, 0.15);
    
    color: var(--text);
}

main form {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--spacing-md);
    margin: var(--spacing-md) 0;

    font-weight: 600;
    font-size: var(--font-size-slg);
    text-align: center;
    text-shadow: 0px 4px 4px rgba(47, 50, 57, 0.15);

    color: var(--text);
    
    div {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            gap: var(--spacing-sm);

            input {
                height: 53px;

                font-family: 'Montserrat';
                font-size: var(--font-size-input);
                text-align: center;
        
                background-color: var(--text);
        
                border: 0;
                border-radius: 10px;
            }

            input::placeholder {
                text-align: center;
            }

            input:focus {
                box-shadow: 0 0 8px rgba(47, 50, 57, 0.6);

                outline: none;
            }
        }


    div:nth-of-type(1) input {
        width: 120px;
    }

    div:nth-of-type(2) input {
        width: 200px;
    }

    div:nth-of-type(3) input {
        width: 346px;
    }

    div:nth-of-type(4) {
        display: flex;
        flex-flow: row;
        justify-content: center;
        gap: var(--spacing-md);

        font-size: var(--font-size-base);
        
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            
            height: 53px;
            width: 162px;
            
            font-weight: 300;
            font-size: var(--font-size-base);
            
            color: var(--text);
            
            border: 0;
            border-radius: 10px;
            
            cursor: pointer;
        }

        button:nth-of-type(1) {
            background-color: var(--secondary);
        }

        button:nth-of-type(2) {
            background-color: var(--primary);
        }

        button:focus {
            box-shadow: 0 0 8px rgba(47, 50, 57, 0.6);

            outline: none;
        }
    }
}
</style>