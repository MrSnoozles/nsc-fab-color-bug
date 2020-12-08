<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout rows="*,auto">
            <ScrollView row="0" rowSpan="2">
            	<StackLayout>
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label text="Example" />
            		<Label  :text="'fa-arrow-right' | fonticon" class="fa" color="#f00" />
            	</StackLayout>
            </ScrollView>

            <FlexboxLayout row="1" flexDirection="row-reverse">
                <MDFloatingActionButton  class="fa floating-action-button" color="#f00" :text="'fa-arrow-right' | fonticon"/>
            </FlexboxLayout>
        </GridLayout>
        
    </Page>
</template>

<script>
  export default {
    
  };
</script>

<style lang="scss">
    .floating-action-button {
    	color: red;
    }
</style>
