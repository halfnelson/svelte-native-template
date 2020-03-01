<page>
    <actionBar title="Svelte Native App" />
    <gridLayout>
        <label class="info" horizontalAlignment="center" verticalAlignment="center" textWrap="true">
            <formattedString>
                <span class="fas" text="&#xf135;" />
                <span text=" {message}" />
            </formattedString>
        </label>
    </gridLayout>
</page>

<script>
    let message = "Blank Svelte Native App"
</script>

<style>
    .info .fas {
        color: #3A53FF;
    }
    .info {
        font-size: 20;
    }
</style>
